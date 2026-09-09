export const galaxyVertexShader = /* glsl */ `
  attribute float aSize;
  attribute float aPhase;
  attribute float aShape;
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uScale;
  uniform vec2 uPointer;
  uniform vec2 uViewport;
  uniform float uPointerRadius;
  uniform float uInfluence;
  varying vec3 vColor;
  varying float vAlpha;
  varying float vShape;

  void main() {
    vec3 star = position;
    float angle = uTime * 0.028;
    mat2 orbit = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    star.xy = orbit * star.xy;
    vec4 view = modelViewMatrix * vec4(star, 1.0);
    vec4 projected = projectionMatrix * view;
    vec2 delta = (projected.xy / projected.w - uPointer) * uViewport * 0.5;
    float distanceToPointer = length(delta);
    vec2 direction = distanceToPointer > 0.001
      ? delta / distanceToPointer
      : vec2(cos(aPhase), sin(aPhase));
    float falloff = 1.0 - smoothstep(0.0, uPointerRadius, distanceToPointer);
    float scatter = 0.75 + 0.4 * (0.5 + 0.5 * sin(aPhase * 3.0));
    float pushDistance = min(32.0, uPointerRadius * 0.28);
    vec2 displacement = direction * pushDistance * scatter * falloff * uInfluence;
    // Displace only on the screen plane; keep depth and particle size unchanged.
    projected.xy += displacement * 2.0 / uViewport * projected.w;
    gl_Position = projected;
    gl_PointSize = clamp(aSize * uPixelRatio * uScale * (9.0 / -view.z), 1.0, 20.0);
    vColor = color;
    vAlpha = 0.64 + 0.18 * sin(uTime * 0.55 + aPhase);
    vShape = aShape;
  }
`

export const galaxyFragmentShader = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;
  varying float vShape;

  void main() {
    vec2 p = gl_PointCoord - 0.5;
    float alpha;
    if (vShape < 0.5) {
      float d = length(p);
      alpha = exp(-d * d * 10.0) * (1.0 - smoothstep(0.3, 0.5, d));
    } else {
      float d;
      if (vShape < 1.5) {
        p.y += 0.05;
        d = max(abs(p.x) * 0.866 + p.y * 0.5, -p.y) - 0.21;
      } else {
        d = abs(p.x) + abs(p.y) - 0.32;
      }
      alpha = 1.0 - smoothstep(0.025, 0.085, abs(d));
      alpha *= 0.6;
    }
    if (alpha < 0.015) discard;
    gl_FragColor = vec4(vColor, alpha * vAlpha);
    #include <colorspace_fragment>
  }
`
