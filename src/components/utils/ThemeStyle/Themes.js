import { extendTheme } from '@chakra-ui/react'


export const newTheme = extendTheme({
    layerStyles: {
        baseTab: {
            color: "#bdc3c7",
        },
        activeTab: {
            color: "#34495e",
        },
        activeTabSideBar: {
            boxShadow: "9px -1px 8px 0px rgba(243,156,18,0.5)",
            bg: "#f39c12"
        },
        selectedIcon: {
            color: "#f39c12"
        }
    },
});