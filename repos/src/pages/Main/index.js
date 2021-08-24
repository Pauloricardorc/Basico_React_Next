import React, { useState, useCallback, useEffect } from 'react'
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa'
import { Container, Form, SubmitButton, List, DeleteButton } from './style'
import api from '../../services/api'
import { Link } from 'react-router-dom';

export default function Main() {

    const [newRepo, setNewRepo] = useState('');
    const [repositorio, setRepositorio] = useState([])
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(null)

    // DidMount => buscar

    useEffect(() => {
        const repoStorage = localStorage.getItem('repos');

        if(repoStorage){
            setRepositorio(JSON.parse(repoStorage))
        }
    }, [])

    // DidUpdate => salvar alterações

    useEffect(() => {
        localStorage.setItem('repos', JSON.stringify(repositorio))
    }, [repositorio])

    function handleinputChange(e){
        setNewRepo(e.target.value);
        setAlert(null)
    }

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        async function submit() {
            setLoading(true)
            setAlert(null)
            try {

                if(newRepo === ''){
                    throw new Error('Você precisa indicar um repositorio!')
                }

                const response = await api.get(`repos/${newRepo}`)

                const hasRepo = repositorio.find(repo => repo.name === newRepo);

                if(hasRepo){
                    throw new Error('Repositorio duplicado')
                }

                const data = {
                    name: response.data.full_name
                }
                setRepositorio([...repositorio, data])
                setNewRepo('') 
            }catch (error) {
                setAlert(true)
                console.log(error)
            }finally{
                setLoading(false)
            }
        }
        submit()
    }, [newRepo, repositorio])

    const handleDelete = useCallback((repo) => {
        console.log('find')
        const find = repositorio.filter(r => r.name !== repo);
        setRepositorio(find);
    }, [repositorio])
    
    return(
        <Container>
            
            <h1>
                <FaGithub size={25} />
                Meus Repositorios
            </h1>

            <Form onSubmit={handleSubmit} error={alert}>
                <input
                    type="text" 
                    placeholder="Adicionar Repositorios" 
                    value={newRepo}
                    onChange={handleinputChange}
                />

                <SubmitButton loading={loading ? 1 : 0}>
                    {loading ? (
                        <FaSpinner color="#FFF" size={14} />
                    ) : (
                        <FaPlus color="#FFF" size={14} />
                    )}
                </SubmitButton>

            </Form>

            <List>
                {repositorio.map(repo => (
                    <li key={repo.name}>
                        <span>
                            <DeleteButton onClick={() => handleDelete(repo.name)}>
                                <FaTrash size={14} />
                            </DeleteButton>
                            {repo.name}
                        </span>
                        <Link to={`/repositorio/${encodeURIComponent(repo.name)}`}>
                            <FaBars size={20} />
                        </Link>
                    </li>
                ))} 
            </List>

        </Container>
    )
}