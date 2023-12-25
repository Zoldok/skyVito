import * as S from './Preloader.styles'

function Preloader() {
  return (
    <S.HeaderStyleMyProfile>
    <S.RippleLoaderContainer>
      <S.RippleLoader>
        <S.RippleDiv />
        <S.RippleDiv />
      </S.RippleLoader>
    </S.RippleLoaderContainer>
    </S.HeaderStyleMyProfile>
  )
}

export default Preloader



// <div class="loadingio-spinner-ripple-z0js4k6azzl"><div class="ldio-4l64xa0oryn">

// <div></div><div></div>

// </div></div>
// <style type="text/css">
// @keyframes ldio-4l64xa0oryn {
//   0% {
//     top: 96px;
//     left: 96px;
//     width: 0;
//     height: 0;
//     opacity: 1;
//   }
//   100% {
//     top: 18px;
//     left: 18px;
//     width: 156px;
//     height: 156px;
//     opacity: 0;
//   }
// }.ldio-4l64xa0oryn div {
//   position: absolute;
//   border-width: 4px;
//   border-style: solid;
//   opacity: 1;
//   border-radius: 50%;
//   animation: ldio-4l64xa0oryn 1s cubic-bezier(0,0.2,0.8,1) infinite;
// }.ldio-4l64xa0oryn div:nth-child(1) {
//   border-color: #94ff4d;
//   animation-delay: 0s;
// }
// .ldio-4l64xa0oryn div:nth-child(2) {
//   border-color: #33aaf9;
//   animation-delay: -0.5s;
// }
// .loadingio-spinner-ripple-z0js4k6azzl {
//   width: 200px;
//   height: 200px;
//   display: inline-block;
//   overflow: hidden;
//   background: #f1f2f3;
// }
// .ldio-4l64xa0oryn {
//   width: 100%;
//   height: 100%;
//   position: relative;
//   transform: translateZ(0) scale(1);
//   backface-visibility: hidden;
//   transform-origin: 0 0; /* see note above */
// }
// .ldio-4l64xa0oryn div { box-sizing: content-box; }
// /* generated by https://loading.io/ */
// </style>