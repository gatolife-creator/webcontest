import React from "react";
import { useRecoilValue } from "recoil";
import { langState } from "../atom";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";
import { MiniSectionTitle } from "../components/MiniSectionTitle";

export const Activity = () => {
  const lang = useRecoilValue(langState);
  return (
    <>
      <Drawer>
        <Main>
          <MiniSectionTitle>NEWS</MiniSectionTitle>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="text-lg">
                    {lang === "ja" && "日付"}
                    {lang === "en" && "Date"}
                  </th>

                  <th className="text-lg">
                    {lang === "ja" && "活動内容"}
                    {lang === "en" && "Activity"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {lang === "ja" && "2022/7/16"}
                    {lang === "en" && "16/Jul./2022"}
                  </td>

                  <td>
                    {lang === "ja" && " テーマ「ブロックチェーン」に決定。"}
                    {lang === "en" && "Theme 'Blockchain' decided."}

                  </td>
                </tr>

                <tr>
                  <td>
                    {lang === "ja" && "2022/7/16"}
                    {lang === "en" && "16/Jul./2022"}
                  </td>

                  <td>
                    {lang === "ja" && "タイトル決定。"}
                    {lang === "en" && "Title decided."}
                  </td>
                </tr>

                <tr>
                  <td>
                    {lang === "ja" && "2022/7/19"}
                    {lang === "en" && "19/Jul./2022"}

                  </td>
                  <td>
                    {lang === "ja" && "コンテストへ応募。"}
                    {lang === "en" && "Submitted an entry to the contest."}
                  </td>
                </tr>

                <tr>
                  <td>
                    {lang === "ja" && "2022/7/25"}
                    {lang === "en" && "25/Jul./2022"}

                  </td>


                  <td>
                    {lang === "ja" && "文章構成についての話し合い。"}
                    {lang === "en" && "Discussion on the structure of the text."}

                  </td>
                </tr>
                <tr>
                  <td>
                    {lang === "ja" && "2022/7/31"}
                    {lang === "en" && "31/jul./2022"}

                  </td>
                  <td>
                    {lang === "ja" && "ウェブのデザインを開始。"}
                    {lang === "en" && "Started web design."}

                  </td>
                </tr>
                <tr>
                  <td>
                    {lang === "ja" && "2022/9/11"}
                    {lang === "en" && "11/Sep./2022"}

                  </td>
                  <td>
                    {lang === "ja" && "キャラクターデザイン開始。"}
                    {lang === "en" && "Started character design"}

                  </td>
                </tr>
                <tr>
                  <td>
                    {lang === "ja" && "2022/11/6"}
                    {lang === "en" && "6/Nov.2022"}

                  </td>
                  <td>
                    {lang === "ja" && "株式会社ソニー・グローバルエデュケーション様にインタビュー依頼。"}
                    {lang === "en" && "Requested an interview with Sony Global Education Inc."}

                  </td>
                </tr>
                <tr>

                  <td>
                    {lang === "ja" && "2022/11/6"}
                    {lang === "en" && "6/Nov./2022"}

                  </td>
                  <td>
                    {lang === "ja" && "株式会社ビットキー様にインタビュー依頼。"}
                    {lang === "en" && "Requested an interview with Bitkey Inc."}

                  </td>
                </tr>
                <tr>
                  <td>
                    {lang === "ja" && "2022/11/6"}
                    {lang === "en" && "6/Nov./2022"}

                  </td>
                  <td>
                    {lang === "ja" && "double jump.tokyo株式会社様にインタビュー依頼。"}
                    {lang === "en" && "Requested an Interview with double jump.tokyo Inc."}

                  </td>
                </tr>
                <tr>
                  <td>
                    {lang === "ja" && "2022/11/7"}
                    {lang === "en" && "7/Nov.2022"}

                  </td>
                  <td>
                    {lang === "ja" && "double jump.tokyo株式会社様にインタビュー。"}
                    {lang === "en" && " Interviewed with double jump.tokyo Inc."}

                  </td>
                </tr>
                <tr>
                  <td>
                    {lang === "ja" && "2022/11/9"}
                    {lang === "en" && "9/Nov./2022"}

                  </td>
                  <td>
                    {lang === "ja" && "株式会社chaintope様にインタビュー依頼。"}
                    {lang === "en" && " Interviewed with chaintope Inc."}

                  </td>
                </tr>
                <tr>
                  <td>
                    {lang === "ja" && "2022/11/10"}
                    {lang === "en" && "10/Nov./2022"}

                  </td>


                  <td>
                    {lang === "ja" && "株式会社chaintope様にインタビュー。"}
                    {lang === "en" && "Interviewed with chantope Inc."}

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Main>
      </Drawer>
    </>
  );
};
