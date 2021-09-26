import { Component } from "react";
import 'semantic-ui-css/semantic.min.css'
import { Container, Flag, Grid, Icon, Input, Image, Header, Divider, Label, Button } from 'semantic-ui-react'
class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Grid columns='equal' padded devided>
            <Grid.Row>
              <Grid.Column width={1}>
                <Flag name='id' />
              </Grid.Column>
              <Grid.Column width={2}>
                <Icon name='chevron left' />
                <Icon name='chevron right' style={{ marginLeft: '50px' }} />
              </Grid.Column>
              <Grid.Column width={10}>
                <Input icon='star' fluid placeholder='Search' />
              </Grid.Column>
              <Grid.Column width={3}>
                <Header as="h3">
                  <Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png' avatar />
                  Patrick
                </Header>
              </Grid.Column>
            </Grid.Row>

          </Grid>
        </Container>
        <Divider horizontal>SELAMAT DATANG !!!!</Divider>
        <Container>
          <Grid columns={2}>
            <Grid.Column width={15}>
            </Grid.Column>
            <Grid.Column width={1}>
              <Label as='a' color='teal' tag>
                SPORTS
              </Label>
            </Grid.Column>
          </Grid>
        </Container>
        <Container textAlign='center' style={{ margin: '30px 0' }}>
          <p>
            Ducati tengah menunggu sidang Pengadilan Banding FIM tentang komponen aerodinamis. Andai gugatan para rivalnya diterima, akankah Ducati akan melanjutkan ke cas(Pengadilan Arbitrase Olahraga)?

            Suzuki, Honda, KTM, dan Aprilia memprotes penggunaan komponen aero di motor Desmosedici Andrea Dovizioso dan Danilo Petrucci dalam balapan pertama MotoGP 2019 di Qatar karena dianggap ilegal. Pada prosesnya, Dovizioso tampil sebagai pemenang usai mengalahkan Marc Marquez.

            Keempat tim meyakini, komponen itu memiliki fungsi aerodinamis, dan menghasilkan downforce, yang membantu motor melesat di trek. Sementara Ducati bersikukuh komponen itu cuma untuk mendinginkan ban dan sudah disetujui Technical Director sebelum balapan.Pada awalnya, protes keempat tim itu ditolak oleh steward MotoGP sehingga dibawa ke Pengadilan Banding FIM. Sidang itu sendiri akan dilakukan sebelum seri kedua di Argentina digelar pada 29-31 Maret mendatang.Manajer umum Ducati Gigi Dall'Igna berkukuh tidak ada yang ilegal dengan komponen itu. Namun, seandainya pengadilan mengabulkan gugatan tersebut Ducati akan mempertimbangkan melanjutkan kasus ini ke CAS.

            "Di dalam federasi, derajatnya berakhir di Pengadilan Banding FIM. Anda harus pergi ke CAS, yang adalah pengadilan olahraga tapi di dalam kasus ini Anda keluar dari perimeter FIM," Dall'Igna mengungkapkan kepada MotoGP.com.

            "Saya bahkan tidak ingin memikirkan sampai titik ini. Kami sangat yakin bahwa kami tidak melanggar regulasi kok, dan yakin kami tidak melihat adanya alasan mengapa pengadilan banding bisa memutuskan secara berbeda."
          </p>
          <Button icon color='teal' labelPosition='center'>
            <Icon name='plus' />
            Tambah Tautan Ke List
          </Button>
        </Container>
      </div >
    )
  }
}
export default App