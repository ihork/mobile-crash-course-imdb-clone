class MockFilmsDbService {

    getFilmsData = async function() {};

    reset() {
        this.getFilmsData = jest.fn();
    }

    addFilmsDataReturn(value) {
        this.getFilmsData.mockReturnValueOnce(value);
    }
}

export default new MockFilmsDbService();