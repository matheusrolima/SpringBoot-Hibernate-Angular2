package com.instituicao.usuario.model;

public interface UsuarioDao {

	Usuario getUsuarioByNomeAndPassword(String usuario, String senha);

	Usuario getUsuarioByNome(String usuario);

}
