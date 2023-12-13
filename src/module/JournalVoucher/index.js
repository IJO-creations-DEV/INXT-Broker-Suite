import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

<<<<<<< Updated upstream
export default index
=======
  <div className={styles.voucherContainer}>
      <div className={styles.topContainer}>
        <div className={styles.topText}>
       
      
        <Typography key="3" color="#000" fontSize={"1.5rem"} fontWeight={600}>
            Journal Voucher
          </Typography>
       
          <Breadcrumb />
        </div>
     
     
      <div className={styles.buttonstyle}>
          <Button
            onClick={handleOpen}
            style={{
              backgroundColor: "#6366F1",
              borderRadius: "154px",
              padding: "6px 26px",
            }}
            variant="contained"
            startIcon={<AddIcon />}
          >
            Add
          </Button>
        </div>
   
     
        
      </div>
    
      <div className={styles.middleContainer}>
        <div className={styles.middleTopContainer}>
          <Grid item xs={12}  container className={styles.gridFirstContainer}>
            <Grid
              className={styles.gridColumn}
              xs={12}
              sm={6}
              md={8}
              lg={3}
              xl={3}
            >
              <div>
                <Typography
                  className={styles.gridColumnText}
                  key="3"
                  color="#000"
                  fontSize={16}
                  fontWeight={500}
                >
                  Date
                </Typography>
                <TextFieldComponent />
              </div>
            </Grid>
            <Grid
              className={styles.gridColumn}
              xs={12}
              sm={6}
              md={4}
              lg={2}
              xl={2}
            >
              <div>
                <Typography
                  className={styles.gridColumnText}
                  key="3"
                  color="#000"
                  fontSize={16}
                  fontWeight={500}
                >
                  Tnx Code
                </Typography>
                <SelectComponent />
              </div>
            </Grid>
            <Grid
              className={styles.gridColumn}
              xs={12}
              sm={6}
              md={8}
              lg={4}
              xl={4}
            >
              <div>
                <Typography
                  className={styles.gridColumnText}
                  key="3"
                  color="#000"
                  fontSize={16}
                  fontWeight={500}
                >
                  Description
                </Typography>
                <TextFieldComponent />
              </div>
            </Grid>
            <Grid
              className={styles.gridColumn}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={3}
            >
              <div>
                <Typography
                  className={styles.gridColumnText}
                  key="3"
                  color="#000"
                  fontSize={16}
                  fontWeight={500}
                >
                  Transaction Number
                </Typography>
                <TextFieldComponent />
              </div>
            </Grid>
          </Grid>
        </div>
        <div>Journal Voucher History</div>

        <div className={styles.tableContainer}>
          <TableData />
        </div>
        <div className={styles.middleBottomContainer}>
          <Grid container spacing={2} className={styles.gridFirstContainer}>
            <Grid
              className={styles.gridBottomColumn}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={3}
            >
              <div>
                <Typography
                  className={styles.bottomInputTitle}
                  key="3"
                  color="#000"
                  fontSize={16}
                  fontWeight={500}
                >
                  Total Debit
                </Typography>
                <TextFieldComponent />
              </div>
            </Grid>
            <Grid
              className={styles.gridBottomColumn}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={3}
            >
              <div>
                <Typography
                  className={styles.bottomInputTitle}
                  key="3"
                  color="#000"
                  fontSize={16}
                  fontWeight={500}
                >
                  Net
                </Typography>
                <TextFieldComponent />
              </div>
            </Grid>
            <Grid
              className={styles.gridBottomColumn}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={3}
            >
              <div>
                <Typography
                  className={styles.bottomInputTitle}
                  key="3"
                  color="#000"
                  fontSize={16}
                  fontWeight={500}
                >
                  Total Credit
                </Typography>
                <TextFieldComponent />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <Button
          style={{
            backgroundColor: "#6366F1",
            borderRadius: "154px",
            padding: "6px 30px",
          }}
          variant="contained"
        >
          Approve
        </Button>

        <Button
          style={{
            borderRadius: "154px",
            color: "#6366F1",
            backgroundColor: "white",
            borderColor: "#6366F1",
            borderWidth: 1,
            borderStyle: "solid",
            padding: "6px 30px",
          }}
          variant="contained"
        >
          Print
        </Button>
      </div>
      <ModalScreen
        openModal={openModal}
        handleClose={handleClose}
        setModal={setModal}
      />
    </div>

  );
};

export default Index;

>>>>>>> Stashed changes
