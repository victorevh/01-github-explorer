interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}


export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <div>
                <h3>{props.repository?.name ?? 'Default'}</h3>
                <p>{props.repository?.description}</p>

                <button>
                    <a href={props.repository.html_url}>
                        Acessar repositório
                    </a>
                </button>
            </div>
        </li>
    );
}