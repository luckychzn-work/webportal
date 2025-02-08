interface NavigationTabProps {
    selectedTab: string;
    handleTabChange: (event: React.SyntheticEvent, newValue: string) => void;
}

export default NavigationTabProps;