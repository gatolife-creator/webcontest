import React from "react";
import { useRecoilValue } from "recoil";
import { langState } from "../atom";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";
import { MiniSectionTitle } from "../components/MiniSectionTitle";
import { Pager } from '../components/Pager';

export const Creators = () => {
  const lang = useRecoilValue(langState);
  return (
    <>
      <Drawer>
        <Main>
          <MiniSectionTitle>
            {lang === "ja" && "制作者紹介"}
            {lang === "en" && "Creators introduction"}

          </MiniSectionTitle>
          <h2 className="mb-3 text-2xl">
            {lang === "ja" && "がとらいふ（リーダー）"}
            {lang === "en" && "GatoLife(The team leader)"}

          </h2>
          <p className="mb-10">
            {lang === "ja" && <>猫好きだが猫アレルギー。猫にならび、ブロックチェーンが大好き。
              <br />
              コーディングや文章原案を担当。</>}
            {lang === "en" && <>I like cats but I am very allergic. Also, I like blockchain as much as cats.
              Responsible for coding and drafting text.
            </>}



          </p>

          <h2 className="mb-3 text-2xl">
            {lang === "ja" && "メルクル"}
            {lang === "en" && "Merukuru"}
          </h2>

          <p className="mb-10">
            {lang === "ja" && <> 最近自転車にはまってます。
              <br />
              図の作成、文章の添削を担当。</>}
            {lang === "en" && <>Recently I am addicted to bicycles.
              I am in charge of drawing diagrams and correcting texts.
            </>}



          </p>

          <h2 className="mb-3 text-2xl">
            {lang === "ja" && "宇宙外生命体"}
            {lang === "en" && "A creature from out of the space"}
          </h2>
          <p className="mb-10">

            {lang === "ja" && <> 宇宙外からきたので人間とはあまり馴染めない。
              <br />
              最近は小さな箱型の機械にハマっている。
              <br />
              声量が大きいので近づくことなかれ。
              <br />
              キャラクターデザインを担当。</>}
            {lang === "en" && <> I came from outside of space so I can't really fit in with humans.
              Recently I am addicted to small box-shaped machines.
              I have a loud voice, so stay away from me.
              I am in charge of character design.
            </>}

          </p>

          <h2 className="mb-3 text-2xl">
            {lang === "ja" && "ふぉくしー"}
            {lang === "en" && "Foxy"}

          </h2>
          <p className="mb-10">
            {lang === "ja" && <>早く友達と旅行行きたいです。
              <br />
              サイトデザインの監督を担当。</>}
            {lang === "en" && <>I Can't wait to go on the trip with friends.
              I am Responsible for overseeing the site design.
            </>}


          </p>
          <Pager direction="back" link="/info.html" text={lang === "ja" ? "サイト情報" : lang === "en" ? "Site Info" : ""} />
          <Pager direction="forward" link="/reference.html" text={lang === "ja" ? "参考文献" : lang === "en" ? "References" : ""} />
        </Main>
      </Drawer>
    </>
  );
};
