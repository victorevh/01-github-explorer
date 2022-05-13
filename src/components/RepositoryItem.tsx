import { dateYear } from "./dateYear";

interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
        language: string;
        pushed_at: string;
        dateYear: string;
    }
}


export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <div>
                <h3>{props.repository?.name ?? 'Default'}</h3>
                <p>Atualizado em {props.repository?.pushed_at.slice(0,10)}</p>
                
                <p>{props.repository?.description}</p>
                <p>{props.repository?.dateYear}</p>
                
                
                <p> ◉ {props.repository?.language ?? 'Markdown'}</p>

                <button>
                    <a href={props.repository.html_url}>
                        Acessar repositório
                    </a>
                </button>
            </div>
        </li>
    );
}