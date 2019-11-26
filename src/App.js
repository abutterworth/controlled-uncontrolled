import React from 'react';
import classNames from 'classnames';

// Image assets
import mitLogo from './mit.png';
import berkeleyLogo from './berkeley.png';
import harvardLogo from './harvard.png';
import hkpolyuLogo from './hkpolyu.png';
import utLogo from './ut.png';


function AccordionSection(props) {
  return (
    <div className="accordion-section">
      <div className="d-flex align-items-center">
        <h5 className="m-0">{props.title}</h5>
        <span className="ml-auto"><button>Close this for sure</button></span>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h4 className="mb-5">Top University Systems in the World</h4>


      <AccordionSection
        title="Typewriter food truck paleo artisan..."
      >
        <img src={mitLogo} />
        <p>
          Blue bottle godard migas shabby chic farm-to-table knausgaard. Hell of glossier +1, tumblr ugh subway tile slow-carb man bun fashion axe keffiyeh fingerstache venmo. Yr biodiesel jianbing pabst VHS succulents vegan humblebrag 90's snackwave normcore typewriter flexitarian authentic.
        </p>
      </AccordionSection>


      <AccordionSection
        title="Pok pok pork belly flexitarian..."
      >
        <img src={berkeleyLogo} />
        <p>
          Vape tilde art party aesthetic. Church-key everyday carry vaporware wolf kitsch. Schlitz yr umami chia hella. Blog semiotics dreamcatcher heirloom marfa vape. Woke scenester thundercats shaman schlitz swag 8-bit post-ironic roof party meggings skateboard hell of disrupt. Celiac cardigan mustache scenester freegan.
        </p>
      </AccordionSection>


      <AccordionSection
        title="Af woke photo booth..."
      >
        <img src={harvardLogo} />
        <p>
          Before they sold out pinterest. Vinyl skateboard woke sriracha, dreamcatcher listicle microdosing polaroid migas forage salvia kickstarter typewriter brunch. DIY pitchfork health goth farm-to-table hot chicken, etsy gentrify yr gluten-free. Bushwick prism direct trade kombucha tumeric.
        </p>
      </AccordionSection>


      <AccordionSection
        title="Poke vice food truck selvage..."
      >
        <img src={hkpolyuLogo} />
        <p>
          PBR&B cold-pressed direct trade narwhal chicharrones man braid typewriter. Salvia literally chambray seitan, mumblecore small batch meh beard hexagon pickled biodiesel. Green juice humblebrag bespoke venmo art party chillwave distillery air plant hammock.
        </p>
      </AccordionSection>


      <AccordionSection
        title="Narwhal fingerstache helvetica bitters..."
      >
        <img src={utLogo} />
        <p>
          Asymmetrical man bun put a bird on it XOXO pinterest franzen chia hell of mumblecore. Poutine cray cold-pressed freegan microdosing. Snackwave marfa venmo, bitters leggings tilde cliche kogi gentrify authentic. Franzen gentrify slow-carb sriracha DIY.
        </p>
      </AccordionSection>
    </div>
  );
}

export default App;

/*

Controlled vs. Uncontrolled React Docs
https://reactjs.org/docs/glossary.html#controlled-vs-uncontrolled-components

Hooks reference
https://reactjs.org/docs/hooks-reference.html

Hipster Ipsum
https://hipsum.co/

*/
