import React from "react";
import cards from "../../helpers/cards";
const Card3 = () => {
  return (
      <>
    <div className="learnMore__main">
      <h1>{cards.card3.title}</h1>
      <div className="learnMore__text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          hendrerit suscipit tortor, vitae tristique arcu. Aenean fringilla
          maximus blandit. Phasellus convallis lorem eu dictum malesuada. In
          tincidunt blandit faucibus. Morbi ut varius lacus. Nunc hendrerit dui
          tellus, et ultrices enim pellentesque lacinia. Praesent sed tristique
          dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          mollis dui ac finibus laoreet. Nullam at dapibus nisl. Sed eu mi eros.
        </p>
        <br />
        <p>
          Vestibulum quis enim auctor, gravida neque sit amet, molestie nulla.
          Praesent nec porta purus. Nullam ultricies pretium mi, in gravida
          magna. Donec a purus nec nunc consectetur venenatis. Curabitur porta
          tortor sapien, ac aliquet nulla commodo quis. Praesent dignissim
          hendrerit massa et eleifend. Maecenas in risus vel arcu placerat
          ullamcorper. Fusce sit amet sem eget ex finibus semper id non metus.
        </p>
        <br />
        <p>
          Nam consectetur neque libero, eget fringilla eros molestie ac.
          Phasellus finibus pharetra tincidunt. Ut porta ac risus congue cursus.
          Suspendisse potenti. Fusce commodo ac eros in lacinia. Aliquam commodo
          neque at eleifend faucibus. Morbi hendrerit condimentum nibh, a
          commodo mauris cursus at. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Morbi dignissim ipsum non enim auctor, ac aliquam
          nunc rutrum. Quisque at rutrum arcu, eget commodo ex.
        </p>
        <br />
      </div>
      <img
          src="https://scx2.b-cdn.net/gfx/news/hires/2021/i-was-astonished-at-ho.jpg"
          alt="Personal tutors"
          className="learnMore__image"
        />
    </div>

    </>
  );
};

export default Card3;
