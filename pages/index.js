import { TextStyle, Page, Layout, EmptyState, FooterHelp, Link, Card, Stack, Button } from '@shopify/polaris';
import { TitleBar, ResourcePicker } from '@shopify/app-bridge-react';
import { useState } from 'react';

const Index = () => {

    const [open, setOpen] = useState(false);

    const [productsSelected, saveProducts] = useState('');


    const handleSelection = resources => {
        setOpen(false);
        console.log(resources);
        saveProducts(resources);
    }

    const printProducts = () => {
        console.log("Registro");
    }


    return(
            
        <Page fullWidth={true}>

            <ResourcePicker
                resourceType="Product"
                showVariants={false}
                open={open}
                onSelection={handleSelection}
                onCancel={() => setOpen(false)}
            />

            <Layout>
                <Layout.Section>
                    <Card title="MENU" sectioned>
                        <Stack>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in consequat leo, 
                                eu placerat dui. Nunc ornare felis nunc, eu consectetur dolor consectetur a. Quisque eu 
                                ante ut tortor condimentum varius. Nulla at egestas felis, a vestibulum ex. Aenean a erat 
                                in arcu tempus porttitor in ac erat. Cras tempor quam pellentesque placerat faucibus. 
                                Suspendisse vel elit non augue mollis faucibus. Vestibulum finibus tincidunt orci eget 
                                blandit. Nulla sit amet magna mi. Etiam vel erat augue. Vestibulum ante ipsum primis in 
                                faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus consectetur in magna 
                                sit amet sollicitudin. Etiam sed diam eu eros ullamcorper pellentesque. Etiam non enim 
                                commodo, maximus enim laoreet, rhoncus libero. 
                            </p>
                        </Stack>
                    </Card>
                </Layout.Section>

                <Layout.Section secondary>

                    <Card title="Navegación" sectioned>
                        <Button submit><Link url="/registerUser">Registro</Link></Button>
                    </Card>

                    <Card title="Tienda" sectioned>
                            <EmptyState
                                heading="Selecciona los productos"
                                action={{
                                content: 'Productos',
                                onAction: () => setOpen(true)
                                }}
                            >   
                            </EmptyState>
                        </Card>  

                    <Card title="Envío" sectioned>
                        <EmptyState
                            heading="Productos"
                            action={{
                            content: 'Envíar productos a revisión',
                            onAction: () => printProducts()
                            }}
                        >
                        </EmptyState>
                    </Card>


                </Layout.Section>
            </Layout> 

            <FooterHelp>
            Soy Ricardo{' '}
            <Link url="https://help.shopify.com/manual/orders/fulfill-orders">
                Rodríguez
            </Link>
            </FooterHelp>
        </Page>
    );
};

export default Index;