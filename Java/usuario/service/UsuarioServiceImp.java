package com.instituicao.usuario.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.instituicao.usuario.model.Usuario;
import com.instituicao.usuario.model.UsuarioDao;

@Service
public class UsuarioServiceImp implements UsuarioService {

	@Autowired
	UsuarioDao usuarioDao;

	@Override
	public Usuario getUsuarioByNome(String usuario) {

		return usuarioDao.getUsuarioByNome(usuario);
	}

	@Override
	public Usuario getUsuarioByNomeAndPassword(String usuario, String senha) {
		Usuario us = usuarioDao.getUsuarioByNomeAndPassword(usuario, senha);

		return us;
	}

}
