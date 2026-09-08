import bin from "@/assets/hero/parts/bin.png";
import book from "@/assets/hero/parts/book.png";
import carpet from "@/assets/hero/parts/carpet.png";
import code from "@/assets/hero/parts/code.png";
import dekstop from "@/assets/hero/parts/dekstop.png";
import dot from "@/assets/hero/parts/dot.png";
import flowerTopBig from "@/assets/hero/parts/flower-top-big.png";
import flowerTop from "@/assets/hero/parts/flower-top.png";
import headphone from "@/assets/hero/parts/headphone.png";
import keyboard from "@/assets/hero/parts/keyboard.png";
import man from "@/assets/hero/parts/man.png";
import pen from "@/assets/hero/parts/pen.png";
import table from "@/assets/hero/parts/table.png";
import teaCup from "@/assets/hero/parts/tea-cup.png";

const SCENE_W = 580;
const SCENE_H = 560;

const layers = [
  { name: "carpet", src: carpet, anim: "fadeInLeft", x: 63, y: 261, w: 510, h: 293, z: 1 },
  { name: "table", src: table, anim: "zoomIn", x: 132, y: 177, w: 380, h: 342, z: 2 },
  { name: "dot", src: dot, anim: "zoomIn", x: 471, y: 177, w: 94, h: 70, z: 2 },
  { name: "flower-top-big", src: flowerTopBig, anim: "fadeInUp", x: 482, y: 147, w: 78, h: 291, z: 3 },
  { name: "bin", src: bin, anim: "zoomIn", x: 434, y: 405, w: 86, h: 112, z: 4 },
  { name: "book", src: book, anim: "bounceIn", x: 196, y: 167, w: 78, h: 74, z: 5 },
  { name: "pen", src: pen, anim: "zoomIn", x: 244, y: 127, w: 42, h: 77, z: 5 },
  { name: "dekstop", src: dekstop, anim: "fadeInDown", x: 291, y: 137, w: 105, h: 147, z: 5 },
  { name: "keyboard", src: keyboard, anim: "fadeInUp", x: 244, y: 259, w: 121, h: 73, z: 6 },
  { name: "flower-top", src: flowerTop, anim: "rotateIn", x: 400, y: 232, w: 53, h: 87, z: 6 },
  { name: "headphone", src: headphone, anim: "rollIn", x: 448, y: 250, w: 62, h: 62, z: 7 },
  { name: "tea-cup", src: teaCup, anim: "fadeInLeft", x: 358, y: 256, w: 44, h: 104, z: 8 },
  { name: "man", src: man, anim: "fadeInDown", x: 0, y: 157, w: 371, h: 400, z: 9 },
  { name: "code", src: code, anim: "fadeInUp", x: 266, y: 0, w: 174, h: 111, z: 10 },
] as const;

export default function HeroScene() {
  return (
    <div className="hero-scene" aria-label="Workspace assembling on load">
      {layers.map((layer) => (
        <img
          key={layer.name}
          src={layer.src}
          alt=""
          className={`animate-${layer.anim}`}
          style={{
            position: "absolute",
            left: `${(layer.x / SCENE_W) * 100}%`,
            top: `${(layer.y / SCENE_H) * 100}%`,
            width: `${(layer.w / SCENE_W) * 100}%`,
            height: `${(layer.h / SCENE_H) * 100}%`,
            zIndex: layer.z,
          }}
        />
      ))}
    </div>
  );
}
