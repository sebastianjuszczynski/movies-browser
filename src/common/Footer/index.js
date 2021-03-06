import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "../commonSlice";
import { Wrapper, SwitchButton, SwitchButtonBox } from "./styled";

const Footer = () => {
    const dispatch = useDispatch();
    const isNormalTheme = useSelector(selectTheme);

    return (
        <Wrapper>
            Light theme
            <SwitchButtonBox onClick={() => dispatch(setTheme(!isNormalTheme))}>
                <SwitchButton
                    isNormalTheme={isNormalTheme}
                />
            </SwitchButtonBox>
            Dark theme
        </Wrapper>
    );
};

export default Footer;