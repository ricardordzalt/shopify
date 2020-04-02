import { TextStyle, Page, Layout, EmptyState, FooterHelp, Link, Card } from '@shopify/polaris';
import { TitleBar, ResourcePicker } from '@shopify/app-bridge-react';
import { useState } from 'react';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg'; 

const Index = () => {

    const [open, setOpen] = useState(false);

    const [productsSelected, saveProducts] = useState('');


    const handleSelection = resources => {
        setOpen(false);
        console.log(resources);
        saveProducts(resources);
    }

    const printProducts = () => {
        console.log(productsSelected);
    }


    return(
            
        <Page>

            <TitleBar
                primaryAction={{
                    content: 'Hola soy un primary action'
                }}
            />
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
                    </Card>
                </Layout.Section>

                <Layout.Section secondary>
                    <Card title="Tienda" sectioned>
                        <EmptyState
                            heading="Selecciona los productos"
                            action={{
                            content: 'Registro',
                            onAction: () => setOpen(true)
                            }}
                        >   
                        </EmptyState>
                    </Card>
                    <Card title="Envío" sectioned>
                        <EmptyState
                            resourceType="Product"
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

            <Layout>
                
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