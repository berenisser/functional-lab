const serializeUser = user => {
    
    const usuario = Object.assign({}, user);
	usuario.name = (usuario.name.length > 10) ? `${usuario.name.slice(0, 7)}...` : usuario.name;
	usuario.date = usuario.date.toJSON();
	return JSON.stringify(usuario);
};

module.exports = serializeUser;