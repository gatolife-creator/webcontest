import React, { useState } from "react";
import Sketch from "react-p5";
import P5 from "p5";

export const Particles = () => {
  const [canvas, setCanvas] = useState<P5.Element>();
  const [particles, setParticles] = useState<any[]>([]);
  // this class describes the properties of a single particle.
  class Particle {
    p5: P5;
    x: number;
    y: number;
    size: number;
    xSpeed: number;
    ySpeed: number;
    constructor(p5: P5) {
      this.p5 = p5;
      this.x = p5.random(0, p5.width);
      this.y = p5.random(0, p5.height);
      this.size = p5.random(10, 20);
      this.xSpeed = p5.random(-1.5, 1.5);
      this.ySpeed = p5.random(-1.5, 1.5);
    }

    // creation of a particle.
    createParticle() {
      this.p5.noStroke();
      this.p5.fill(20, 20, 20, 200);
      this.p5.rect(this.x, this.y, this.size, this.size);
    }

    // setting the particle in motion.
    moveParticle() {
      if (this.x + this.size < 0) this.x = this.p5.width;
      if (this.x > this.p5.width) this.x = this.size;
      if (this.y + this.size < 0) this.y = this.p5.height;
      if (this.y > this.p5.height) this.y = this.size;
      this.x += this.xSpeed;
      this.y += this.ySpeed;
    }

    joinParticles(particles: any[]) {
      const target = 150;
      particles.forEach((element) => {
        let dis = this.p5.dist(this.x, this.y, element.x, element.y);
        if (dis < target) {
          const col = this.p5.map(dis, 0, target, 255, 20);
          this.p5.strokeWeight(2);
          this.p5.stroke(0, 0, 0, col);
          this.p5.line(
            this.x + this.size / 2,
            this.y + this.size / 2,
            element.x + element.size / 2,
            element.y + element.size / 2
          );
        }
      });
    }
  }

  const setup = (p5: P5, canvasParentRef: Element) => {
    setCanvas(
      p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef)
    );
    p5.angleMode(p5.DEGREES);
  };

  const draw = (p5: P5) => {
    if (p5.frameCount < 20 && p5.frameCount < 70) {
      setParticles([...particles, new Particle(p5)]);
    }
    p5.background(250, 204, 0);
    for (let i = 0; i < particles.length; i++) {
      particles[i].createParticle();
      particles[i].joinParticles(particles.slice(i));
      particles[i].moveParticle();
    }
  };

  const windowResized = (p5: P5) => {
    // @ts-ignore
    setCanvas(p5.resizeCanvas(p5.windowWidth, p5.windowHeight));
  };

  return (
    <>
      <Sketch
        className="particles absolute top-0 left-0 -z-50"
        // @ts-ignore
        setup={setup}
        // @ts-ignore
        draw={draw}
        // @ts-ignore
        windowResized={windowResized}
      />
    </>
  );
};
