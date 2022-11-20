import React from "react";
import { Drawer } from "../components/Drawer";
import { Main } from "../components/Main";
import { MiniSectionTitle } from "../components/MiniSectionTitle";

export const Activity = () => {
  return (
    <>
      <Drawer>
        <Main>
          <MiniSectionTitle>活動情報</MiniSectionTitle>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="text-lg">日付</th>
                  <th className="text-lg">活動内容</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2022/7/16</td>
                  <td>テーマ「ブロックチェーン」に決定。</td>
                </tr>
                <tr>
                  <td>2022/7/16</td>
                  <td>タイトル決定。</td>
                </tr>
                <tr>
                  <td>2022/7/19</td>
                  <td>コンテストへ応募。</td>
                </tr>
                <tr>
                  <td>2022/7/25</td>
                  <td>文章構成についての話し合い。</td>
                </tr>
                <tr>
                  <td>2022/7/31</td>
                  <td>ウェブのデザインを開始。</td>
                </tr>
                <tr>
                  <td>2022/9/11</td>
                  <td>キャラクターデザイン開始。</td>
                </tr>
                <tr>
                  <td>2022/11/6</td>
                  <td>
                    株式会社
                    ソニー・グローバルエデュケーション様にインタビュー依頼。
                  </td>
                </tr>
                <tr>
                  <td>2022/11/6</td>
                  <td>株式会社ビットキー様にインタビュー依頼。</td>
                </tr>
                <tr>
                  <td>2022/11/6</td>
                  <td>double jump.tokyo株式会社様にインタビュー依頼。</td>
                </tr>
                <tr>
                  <td>2022/11/7</td>
                  <td>double jump.tokyo株式会社様にインタビュー。</td>
                </tr>
                <tr>
                  <td>2022/11/9</td>
                  <td>株式会社chaintope様にインタビュー依頼。</td>
                </tr>
                <tr>
                  <td>2022/11/10</td>
                  <td>株式会社chaintope様にインタビュー。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Main>
      </Drawer>
    </>
  );
};
