import React from "react";
import { Balloon } from "../../components/Balloon";
import { Main } from "../../components/Main";
import { MiniSectionTitle } from "../../components/MiniSectionTitle";
import { Pager } from "../../components/Pager";

export const C5S6 = () => {
    return (
        <Main>
            <MiniSectionTitle>サプライチェーン</MiniSectionTitle>

            <Pager
                direction="back"
            />
            {/* <Pager direction="forward" text="参考文献" link="#" /> */}
        </Main>
    );
};
