import { Box, IconButton, Tabs, TextField, Tab, Grid } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import tabComp from "../data/tabComp";
import NavigationTabProps from "../types/navigationTabTypes";

const NavigationTab = ({ selectedTab, handleTabChange }: NavigationTabProps) => {
    return (
        <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} md={8}>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                        '.MuiTabs-flexContainer': {
                            gap: { xs: 1, md: 2 },
                            display: "flex",
                            flexWrap: "wrap",
                        },
                        maxWidth: '100%',
                        width: '100%',
                    }}
                >
                    {tabComp.map((tab) => (
                        <Tab
                            key={tab.value}
                            label={tab.label}
                            value={tab.value}
                            sx={{
                                minWidth: 'auto',
                                px: { xs: 1, sm: 2 },
                                fontSize: { xs: '0.8rem', sm: '0.875rem' }
                            }}
                        />
                    ))}
                </Tabs>
            </Grid>

            <Grid item xs={12} md={4}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    justifyContent: { xs: 'flex-start', md: 'flex-end' },
                    width: '100%'
                }}>
                    <TextField
                        size="small"
                        placeholder="Search..."
                        sx={{
                            flexGrow: { xs: 1, sm: 0 },
                            minWidth: { xs: '60%', sm: '200px' }
                        }}
                        InputProps={{
                            endAdornment: <SearchIcon />
                        }}
                    />
                    <IconButton size="small">
                        <RssFeedIcon />
                    </IconButton>
                </Box>
            </Grid>
        </Grid>
    );
};

export default NavigationTab;