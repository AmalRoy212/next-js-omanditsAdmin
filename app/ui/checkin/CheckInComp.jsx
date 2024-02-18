"use client"

import React, { useEffect } from 'react';
import './styles.css';

const CheckIn = () => {
  
  useEffect(() => {
    const Confettiful = function (el) {
      this.el = el;
      this.containerEl = null;

      this.confettiFrequency = 3;
      this.confettiColors = ['#EF2964', '#00C09D', '#2D87B0', '#48485E', '#EFFF1D'];
      this.confettiAnimations = ['slow', 'medium', 'fast'];

      this._setupElements();
      this._renderConfetti();
    };

    Confettiful.prototype._setupElements = function () {
      const containerEl = document.createElement('div');
      const elPosition = this.el.style.position;

      if (elPosition !== 'relative' || elPosition !== 'absolute') {
        this.el.style.position = 'relative';
      }

      containerEl.classList.add('confetti-container');

      this.el.appendChild(containerEl);

      this.containerEl = containerEl;
    };

    Confettiful.prototype._renderConfetti = function () {
      this.confettiInterval = setInterval(() => {
        const confettiEl = document.createElement('div');
        const confettiSize = (Math.floor(Math.random() * 3) + 7) + 'px';
        const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
        const confettiLeft = (Math.floor(Math.random() * this.el.offsetWidth)) + 'px';
        const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];

        confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
        confettiEl.style.left = confettiLeft;
        confettiEl.style.width = confettiSize;
        confettiEl.style.height = confettiSize;
        confettiEl.style.backgroundColor = confettiBackground;

        confettiEl.removeTimeout = setTimeout(function () {
          confettiEl.parentNode.removeChild(confettiEl);
        }, 3000);

        this.containerEl.appendChild(confettiEl);
      }, 25);
    };

    window.confettiful = new Confettiful(document.querySelector('.js-container'));

    return () => {
      clearInterval(window.confettiful.confettiInterval);
    };
  }, []);

  return (
    <div className="container absolute">
      <div className="js-container container" style={{ top: '0px !important' }}></div>

      <div style={{ textAlign: 'center', position: 'fixed', width: '100%', height: '100%', top: '0px', left: '0px', display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <div className='md:w-[300px] h-[300px] bg-black bg-opacity-80 p-10 rounded-2xl text-white'>
          <div className="checkmark-circle">
            <div className="background"></div>
            <div className="checkmark draw"></div>
          </div>
          <h1>Verification completed!</h1>
          <p>Congratulations.</p>
          <a className='text-blue-400' href="https://omandits.com/">go to omandits.com</a>
        </div>
      </div>
    </div>
  );
};

export default CheckIn;
