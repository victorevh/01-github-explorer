import imgCode from '../assets/code.jpg'
import { format, compareAsc } from 'date-fns'

interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
        language: string;
        pushed_at: string;
    }
}


export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <div>
                <h3>{props.repository?.name ?? 'Default'}</h3>

                <img
                    src={imgCode}
                    alt="Imagem de código"
                 />

                <p>Atualizado em { format(props.repository?.pushed_at(2014,1,11), 'MM/dd/yyyy')}</p>
                

                <p>{props.repository?.description ?? 'No description'}</p>
                
                
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