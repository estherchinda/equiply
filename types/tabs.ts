export type TabsType = 
    | "equipments"
    | "reviews"
    | "history"
    | "Settings"

export type Tabs = {
    id: string,
    tabName: string,
};

export const tabsList = [
    {
        id: 1,
        tabName: "All",
        href: "/user/profile/all"
    },
    {
        id: 2,
        tabName: "Equipments",
        href: "/user/profile/equipments"
    },
    {
        id: 3,
        tabName: "Reviews",
        href: "/user/profile/reviews"
    },
    {
        id: 4,
        tabName: "History",
        href: "/user/profile/rental-history"
    },
    // {
    //     id: 5,
    //     tabName: "Settings",
    // },
]