interface BlogCardProps {
    post: {
        category: string;
        title: string;
        description: string;
        image: string;
        authors: Array<{
            name: string;
            avatar: string;
        }>;
        date: string;
    };
    index: number;
}

export default BlogCardProps;