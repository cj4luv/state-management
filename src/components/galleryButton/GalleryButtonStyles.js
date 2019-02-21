const styles = {
  container: {
    position: 'relative',
    width: 100,
    height: 100,
    marginBottom: 10,
    backgroundColor: 'orange',
  },
  dimmer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.28)',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  circle: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: 'transparent',
    border: 'solid 1px #fff',
    width: 18,
    height: 18,
    borderRadius: 9,
  },
  circleActive: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#01bafa',
    width: 18,
    height: 18,
    borderRadius: 9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: 9,
    fontWeight: 'bold',
  },
};

export default styles;
