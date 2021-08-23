import React, { useState, useCallback } from 'react'
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa'
import { Container, Form, SubmitButton } from './style'
import api from '../../services/api'

export default function Main() {

    const [newRepo, setNewRepo] = useState('');
    const [repositorio, setRepositorio] = useState([])
    const [loading, setLoading] = useState(false)

    function handleinputChange(e){
        setNewRepo(e.target.value);
    }

    const handleSubmit = useCallback((e) => {
        setLoading(true)
        e.preventDefault()
        async function submit() {
            try {
                const response = await api.get(`repos/${newRepo}`)
                const data = {
                    name: response.data.full_name
                }
                setRepositorio([...repositorio, data])
                setNewRepo('') 
            }catch (error) {
                console.log(error)
            }finally{
                setLoading(false)
            }
        }
        submit()
    }, [newRepo, repositorio])
    
    return(
        <Container>
            
            <h1>
                <FaGithub size={25} />
                Meus Repositorios
            </h1>

            <Form onSubmit={handleSubmit}>
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

        </Container>
    )
}