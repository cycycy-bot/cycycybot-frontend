import React from 'react';

import './Features.css';

// imgs
import f1 from './img/f1.png';
import f2 from './img/f2.png';
import f3 from './img/f3.png';

const Features = () => (
  <div className="features-container">
    <div className="features-content">
      <section className="feature">
        <div className="feature-main">
          <h1>Custom Commands</h1>
          <h4>Create custom bot reponse from a command!</h4>
        </div>
        <div className="feature-main">
          <img src={f1} alt="feature-1" />
        </div>
      </section>
      <section className="feature feature-reverse">
        <div className="feature-main">
          <img src={f2} alt="feature-2" />
        </div>
        <div className="feature-main">
          <h1>Simple Moderation</h1>
          <h4>
            With cycycy bot
            {'\''}
            s simple moderation system, you can easily kick, ban, or mute a member!
            You can setup a mod role to be able to use the moderation system.
          </h4>
          <br />
          <h4>Automod and warning system will be implemented soon.</h4>
        </div>
      </section>
      <section className="feature">
        <div className="feature-main">
          <h1>Notification message</h1>
          <h4>
            No need to scroll up to 500+ messages with cycycy bot
            {'\''}
            s notification system!
          </h4>
        </div>
        <div className="feature-main">
          <img src={f3} alt="feature-3" />
        </div>
      </section>
      <section className="feature">
        <div className="feature-main">
          <h1>More Features Soon</h1>
          <h4>More features are showed in the commands section</h4>
          <h4>Upcoming features will be on the github repo</h4>
        </div>
      </section>
    </div>
  </div>
);

export default Features;
