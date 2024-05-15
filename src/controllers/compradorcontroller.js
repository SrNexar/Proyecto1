const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            res.json(err);
        } else {
            conn.query('SELECT * FROM COMPRADOR', (err, comprador) => {
                if (err) {
                    res.json(err);
                } else {
                    res.render('comprador', { data: comprador }); // Pasar comprador como contexto
                }
            });
        }
    });
};

controller.save = (req, res) => {
    const data= req.body;


   req.getConnection((err,conn) =>{
    conn.query('INSERT INTO comprador set ?', [data],(err,comprador) =>{
        res.redirect('/');
    })
   })
};

controller.edit =(req,res) => {

    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM comprador WHERE id = ?',[id],(error,comprador)=>{
          res.render('comprador_edit',{
            data:comprador[0]
          });
        });


    });


}


controller.update = (req,res) => {

    const { id } = req.params;
    const newComprador = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE comprador set ? WHERE id = ?', [newComprador,id], (error, rows) => {  
     res.redirect ('/');    
        });  
    });

}


controller.delete = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error al conectar con la base de datos');
            return;
        }

        conn.query('DELETE FROM comprador WHERE id = ?', [id], (error, rows) => {
            if (error) {
                console.log(error);
                res.status(500).send('Error al eliminar el comprador');
                return;
            }
            
            res.redirect('/');
        });
    });
};




    
module.exports = controller;


  
