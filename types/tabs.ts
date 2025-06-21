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
    },
    {
        id: 2,
        tabName: "Equipments",
    },
    {
        id: 3,
        tabName: "Reviews",
    },
    {
        id: 4,
        tabName: "History",
    },
    // {
    //     id: 5,
    //     tabName: "Settings",
    // },
]