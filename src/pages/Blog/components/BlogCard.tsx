import { CardMedia, Card, CardContent, Typography, Stack, AvatarGroup, Avatar, Box } from "@mui/material";
import BlogCardProps from "../types/blogCardTypes";

const BlogCard = ({ post, index }: BlogCardProps) => {
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="img"
                sx={{
                    height: { xs: 200, sm: 250, md: 300 },
                    objectFit: 'cover'
                }}
                image={post.image}
                alt={post.title}
            />
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle2" color="primary" gutterBottom>
                        {post.category}
                    </Typography>
                    <Typography
                        variant="h5"
                        component="h2"
                        gutterBottom
                        sx={{
                            fontSize: { xs: '1.25rem', md: '1.5rem' }
                        }}
                    >
                        {post.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 3 }}
                    >
                        {post.description}
                    </Typography>
                </Box>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <AvatarGroup
                        max={3}
                        sx={{
                            '& .MuiAvatar-root': {
                                width: { xs: 24, md: 32 },
                                height: { xs: 24, md: 32 }
                            }
                        }}
                    >
                        {post.authors.map((author: { name: string; avatar: string }, idx: number) => (
                            <Avatar key={idx} alt={author.name} src={author.avatar} />
                        ))}
                    </AvatarGroup>
                    <Typography variant="body2" color="text.secondary">
                        {post.date}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default BlogCard;