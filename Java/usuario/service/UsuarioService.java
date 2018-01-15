package com.instituicao.usuario.service;

import com.instituicao.usuario.model.Usuario;

public interface UsuarioService {

	Usuario getUsuarioByNome(String usuario);

	Usuario getUsuarioByNomeAndPassword(String usuario, String senha);
}
