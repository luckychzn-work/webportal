import { useState } from 'react';
import {
    Box,
    Typography,
    Container,
    Grid,
} from '@mui/material';
import blogPosts from './data/blogPosts';
import NavigationTab from './components/NavigationTab';
import BlogCard from './components/BlogCard';

function Blog() {
    const [selectedTab, setSelectedTab] = useState('all');

    const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
        setSelectedTab(newValue);
    };

    return (
        <Container maxWidth="lg">
            <Box sx={{ py: { xs: 3, md: 4 } }}>
                <Grid container spacing={3}>
                    {/* Header Section */}
                    <Grid item xs={12}>
                        <Typography variant="h2" component="h1"
                            sx={{
                                fontSize: { xs: '2rem', md: '3rem' },
                                mb: 2
                            }}>
                            Blog
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                            Stay in the loop with the latest about our products
                        </Typography>
                    </Grid>

                    {/* Navigation Section */}
                    <Grid item xs={12}>
                        <NavigationTab
                            selectedTab={selectedTab}
                            handleTabChange={handleTabChange}
                        />
                    </Grid>

                    {/* Blog Posts Grid */}
                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                            {blogPosts.map((post, index) => (
                                <Grid item xs={12} sm={6} md={6} key={index}>
                                    <BlogCard post={post} index={index} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Blog;