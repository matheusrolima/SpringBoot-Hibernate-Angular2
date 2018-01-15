package com.instituicao.usuario.model;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public class UsuarioDaoImp implements UsuarioDao {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public Usuario getUsuarioByNomeAndPassword(String usuario, String senha) {
		String senha2 = "";
		try {
			// Create MessageDigest instance for MD5
			MessageDigest md = MessageDigest.getInstance("MD5");
			// Add password bytes to digest
			md.update(senha.getBytes());
			// Get the hash's bytes
			byte[] bytes = md.digest();
			// This bytes[] has bytes in decimal format;
			// Convert it to hexadecimal format
			StringBuilder sb = new StringBuilder();
			for (int i = 0; i < bytes.length; i++) {
				sb.append(Integer.toString((bytes[i] & 0xff) + 0x100, 16).substring(1));
			}
			// Get complete hashed password in hex format
			senha2 = sb.toString();
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		Criteria crit = this.getSession().createCriteria(Usuario.class);
		crit.add(Restrictions.eq("usuario", usuario));
		crit.add(Restrictions.eq("senha", senha2));

		return (Usuario) crit.uniqueResult();
	}

	@Override
	public Usuario getUsuarioByNome(String usuario) {
		Criteria crit = this.getSession().createCriteria(Usuario.class);
		crit.add(Restrictions.eq("usuario", usuario));
		return (Usuario) crit.list();
	}

	public Session getSession() {

		return (Session) this.entityManager.getDelegate();
	}

}
