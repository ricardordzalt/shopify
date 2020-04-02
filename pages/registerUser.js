import { Page, Layout, Card, Stack, Heading, FormLayout, TextField, Button, Form } from '@shopify/polaris';
import { useState, useCallback } from 'react';

const register = () => {

    const [name, setName] = useState('');   
    const handleChangeStoreName = useCallback((name) => {
        setName(name);
        setSaveData(data.name = name)
    }, []);

    const [email, setEmail] = useState('');
    const handleChangeEmail = useCallback((email) => {
        setEmail(email)
        setSaveData(data.email = email)
    }, []);

    const [legalRep, setLegalRep] = useState('');
    const handleChangeLegalRep = useCallback((legalRep) => {
        setLegalRep(legalRep)
        setSaveData(data.legalRep = legalRep)
    }, []);

    const [creditCard, setCreditCard] = useState('');
    const handleChangeCreditCard = useCallback((creditCard) => {
        setCreditCard(creditCard)
        setSaveData(data.creditCard = creditCard)
    }, []);

    const [phone, setPhone] = useState('');
    const handleChangePhone = useCallback((phone) => {
        setPhone(phone)
        setSaveData(data.phone = phone)
    }, []);

    const [data, setSaveData] = useState({name: '', email: '', legalRep: '', creditCard, phone});
    const handleSaveForm = useCallback( (event) => {
        console.log(data);
    }, []);

    return(
            <Page fullWidth={true}>
                <Layout>
                    <Layout.Section>
                        <Card>
                                <Heading element="h1">Registro</Heading>
                        </Card>
                    </Layout.Section>
                </Layout>
                <br/>
                <br/>
                <Form onSubmit={handleSaveForm}>
                    <FormLayout>
                        <Stack>
                            <TextField type="text" label="Nombre de la tienda" value={name} onChange={handleChangeStoreName} />
                            <TextField type="email" label="E-Mail" value={email} onChange={handleChangeEmail} />
                        </Stack>
                        <Stack>
                            <TextField type="text" label="Nombre del Representante Legal" value={legalRep} onChange={handleChangeLegalRep} />
                            <TextField type="number" max="9999999999999999" label="Opcional (Tarjeta De Crédito" value={creditCard} onChange={handleChangeCreditCard} />
                        </Stack>
                        <Stack>
                            <TextField type="number" label="Teléfono" value={phone} onChange={handleChangePhone} /> 
                        </Stack>
                        <Button submit>Guardar</Button>
                    </FormLayout>
                </Form>
            </Page>
    );
};
export default register;