import React from 'react';

const EN_VACHANAS = [
  "If you want to be truly free, let go of your ego.",
  "A heart without love is like a well without water.",
  "In the world’s marketplace, only the true merchants of truth will prosper.",
  "Seek not the company of the learned, but the presence of the wise.",
  "The body is the temple; the soul is the deity. Worship it with devotion, not just rituals.",
];

const KN_VACHANAS = [
  "ನೀವು ವಾಸ್ತವವಾಗಿ ಸ್ವಾತಂತ್ರ್ಯವಾಗಲು ಬಯಸಿದರೆ, ನಿಮ್ಮ ಅಹಂಕಾರವನ್ನು ಬಿಡಿ.",
  "ಪ್ರೇಮವಿಲ್ಲದ ಹೃದಯವು ನೀರಿಲ್ಲದ ಹೊರೆಯನ್ನು ಹೋಲಿಸುತ್ತದೆ.",
  "ಜಗತ್ತಿನ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ, ನಿಜವಾದ ಸತ್ಯದ ವ್ಯಾಪಾರಿಗಳು ಮಾತ್ರ ಯಶಸ್ವಿಯಾಗುತ್ತಾರೆ.",
  "ಅಧ್ಯಯನ ಮಾಡಿರುವವರ companhia ಅನ್ನು ಹುಡುಕಬೇಡಿ, ಆದರೆ ಶ್ರೇಷ್ಠರ ಸಾನ್ನಿಧ್ಯವನ್ನು ಹುಡುಕಿರಿ.",
  "ಶರೀರವೇ ದೇವಾಲಯ; ಆತ್ಮವೇ ದೇವತೆ. ಅದನ್ನು ಭಕ್ತಿಯೊಂದಿಗೆ, ಕೇವಲ ಆಚಾರಗಳಲ್ಲದೇ ಪೂಜಿಸಿ.",
];

interface VachanaBoxProps {
  lang: 'en' | 'kn';
}

const VachanaBox: React.FC<VachanaBoxProps> = ({ lang }) => {
  const vachanas = lang === 'en' ? EN_VACHANAS : KN_VACHANAS;

  return (
    <div className="vachana-container">
      <div className="vachana-slider">
        {vachanas.concat(vachanas).map((vachana, index) => (
          <div
            key={index}
            className="vachana-card"
          >
            {vachana}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VachanaBox;
