interface DateItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
        language: string;
        pushed_at: string;
        dateYear: string;
    }
   
}

export function dateYear (props: DateItemProps) {
    const year = props.repository.pushed_at.slice(0,4);
    return year
};