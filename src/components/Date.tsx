interface DateItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
        language: string;
        pushed_at: string;
        Date: string;
    }
   
}

export function Date (props: DateItemProps) {
    const year= props.repository.pushed_at.slice(0,4);
    return year;
};