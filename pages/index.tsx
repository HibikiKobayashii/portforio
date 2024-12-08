// pages/index.tsx
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>I am an IoT Student !!</h1>
        <p>開志専門職大学でIoTを学んでいる小林響と申します！XR系に力を入れています！</p>
        <img
          src="/your-image-path.jpg"
          alt="学生の写真"
          style={{
            border: '2px solid #000',
            borderRadius: '10px',
            width: '300px',
            height: 'auto',
            marginTop: '20px',
          }}
        />
      </main>
    </div>
  );
};

export default HomePage;
