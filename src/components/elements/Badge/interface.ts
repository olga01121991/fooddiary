export type TBgColor = "bg_green"
    | "bg_green_light"
    | "bg_saffron"
    | "bg_saffron_light"
    | "bg_orange"
    | "bg_orange_20"
    | "bg_orange_10"
    | "bg_orange_subtle"
    | "bg_black"
    | "bg_pure_white"
    | "bg_blue"
    | "bg_pink"
    | "bg_gray_30"
    | "bg_gray_20"
    | "bg_gray_10"
    | "bg_gray_line"
    | "bg_gray_bg"
    | "bg_blue_00"
    | "bg_blue_10"
    | "bg_blue_20"
    | "bg_blue_subtle"
    | "bg_red"
    | "bg_red_light"
    | "bg_red_subtle"
    | "bg_red_subtle1"


export interface IBaseBadge {
    color?: string;
    text: string;
    bg?: TBgColor;
}