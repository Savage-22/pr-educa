import pool from '../DB.js';

// OBTENER TODOS LOS USUARIOS
export const getUsers = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuarios');
        res.json(result.rows);
    } catch (error) {
        return res.status(500).json({ message: "Error al conectar con el servidor" });
    }
}

// OBTENER UN USUARIO
export const getUser = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuarios WHERE id_user = $1', [req.params.id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.json(result.rows);
        console.log(result.rows)
    } catch (error) {
        return res.status(500).json({ message: "Error al conectar con el servidor" });
    }
}

// CREAR USUARIO
export const createUser = async (req, res) => {
    try {
        const {nombre, descripcion, dni} = req.body;

        const result = await pool.query(
            "INSERT INTO usuarios(nombre, descripcion, dni) VALUES ($1, $2, $3) RETURNING id_user",
            [nombre, descripcion, dni]
        );

        res.json({
            id_user: result.rows[0].id_user,
            nombre,
            descripcion,
            dni,
        });

        //console.log(result)
    } catch (error) {
        console.error("Error al conectar con el servidor:", error);
        return res.status(500).json({ message: "Error al conectar con el servidor" });
    }
};

// ACTUALIZAR USUARIO
export const updateUser = async (req, res) => {
        const { nombre, descripcion,dni, } = req.body;
    try {
        const { nombre, descripcion, dni, } = req.body;
        //console.log(req.body)
        const result = await pool.query(
            'UPDATE usuarios SET nombre = $1, descripcion = $2, dni = $3 WHERE id_user = $4',
            [nombre, descripcion, dni, req.params.id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.json({ message: "Usuario actualizado" });
    } catch (error) {
        return res.status(500).json({ message: "Error al conectar con el servidor" });
    }
}

// ELIMINAR USUARIO
export const deleteUser = async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM usuarios WHERE id_user = $1', [req.params.id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        res.json({ message: "Usuario eliminado" });
    } catch (error) {
        return res.status(500).json({ message: "Error al conectar con el servidor" });
    }
}