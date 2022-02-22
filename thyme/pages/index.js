import Head from 'next/head'
import {
  Avatar,
  Breadcrumbs,
  Button,
  Description,
  EmptyState,
  Icon,
  Loader,
  ThymeTokens,
} from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Demo | Thyme</title>
        <meta name="description" content="A blossoming design system code challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          width: '800px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}
      >
        <h1>Thyme Component Examples</h1>

        <hr />

        <h2>Avatar</h2>
        <Avatar color={Avatar.COLORS.SAGE} initials="PJ" />

        <hr />

        <h2>Breadcrumbs</h2>
        <Breadcrumbs
          items={[
            {
              label: "Lorem ipsum"
            },
            {
              label: "Dolor sit amet"
            },
            {
              label: "Consectitur"
            }
          ]}
        />

        <hr />

        <h2>Button</h2>
        <div style={{ display: 'flex', gap: '24px'}}>
          <Button color={Button.COLORS.PRIMARY}>
            Test
          </Button>
          <Button color={Button.COLORS.SECONDARY} raised={false}>
            Test
          </Button>
          <Button
            color={Button.COLORS.PRIMARY}
            icon={ThymeTokens.ICONS.ADD}
            subtle={true}
          >
            Test
          </Button>
        </div>

        <hr />

        <h2>Description</h2>
        <Description
          items={[
            {
              data: 'Ipsum dolor',
              title: 'Lorem',
            },
            {
              data: 'Consectitur adipiscing elit.',
              title: 'Sit amet',
            }
          ]}
          noDividers={true}
        />

        <hr />

        <h2>Empty State</h2>
        <EmptyState
          actions={(
            <Button
              color={Button.COLORS.SECONDARY}
              raised={false}
            >
              Learn more
            </Button>
          )}
          graphic={<img src="//source.unsplash.com/m0N1Y4hjI2Q/420x240" alt="" />}
          scope={EmptyState.SCOPES.PAGE}
          text={(
            <>
              Sit amet, consectetur adipiscing elit.
              Sed eget sem massa cras eu ante eros.
              Nullam sit amet ipsum sit amet elit hendrerit finibus.
            </>
          )}
          title="Lorem Ipsum Dolor"
        />

        <hr />

        <h2>Icon</h2>
        <Icon
          cardColor={Icon.CARD_COLORS.PUBLISHED}
          circular={true}
          icon={Icon.ICONS.ADD}
        />

        <hr />

        <h2>Loader</h2>
        <Loader loading={true} />

        <hr />
      </main>
    </>
  );
};
