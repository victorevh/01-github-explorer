// Hook React
import {useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import { Container } from "./styles";

interface Repository {
    name: string;
    description: string;
    html_url: string;
    language: string;
    pushed_at: string;
    dateYear: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/victorevh/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    return (
        <Container>
            <section>
                <h1>List of Repositories</h1>

                <ul>
                    {repositories.map(repository => {
                        return <RepositoryItem key={repository.name} repository={repository} />
                    })}
                </ul>
            </section>
        </Container>
    );
}