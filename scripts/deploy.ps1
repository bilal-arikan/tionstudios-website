param(
    [string]$SshHost = 'myhermes'
)

$ErrorActionPreference = 'Stop'
$siteRoot = Split-Path -Parent $PSScriptRoot
$release = Get-Date -Format 'yyyyMMdd-HHmmss'
$archive = Join-Path ([System.IO.Path]::GetTempPath()) "tionport-$release.tar.gz"

Push-Location $siteRoot
try {
    & npm.cmd run check
    if ($LASTEXITCODE -ne 0) { throw 'Website validation failed.' }
    & tar -czf $archive -C dist .
    if ($LASTEXITCODE -ne 0) { throw 'Website packaging failed.' }
    & ssh $SshHost 'mkdir -p /home/hermes/tionport-incoming'
    if ($LASTEXITCODE -ne 0) { throw 'Could not prepare upload directory.' }
    & scp $archive "${SshHost}:/home/hermes/tionport-incoming/$release.tar.gz"
    if ($LASTEXITCODE -ne 0) { throw 'Website upload failed.' }
    & scp (Join-Path $siteRoot 'deploy/release.sh') "${SshHost}:/home/hermes/tionport-incoming/release.sh"
    if ($LASTEXITCODE -ne 0) { throw 'Release script upload failed.' }
    & ssh $SshHost "sudo bash /home/hermes/tionport-incoming/release.sh $release"
    if ($LASTEXITCODE -ne 0) { throw 'Website release failed.' }
    Write-Output "Published release $release."
} finally {
    Pop-Location
    if (Test-Path -LiteralPath $archive) { Remove-Item -LiteralPath $archive }
}
