export interface Post {
    category: string;
    title: string;
    description: string;
    image: string;
    authors: Array<{
        name: string;
        avatar: string;
    }>;
    date: string;
}

export interface BlogCardProps {
    post: Post;
    index: number;
} 