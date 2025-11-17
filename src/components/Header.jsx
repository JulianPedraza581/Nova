// components/Header.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Header({ navigation, type = 'home', title = '', userName = 'Camilo Otalora' }) {
  
  if (type === 'home') {
    return (
      <View style={styles.headerHome}>
        <View style={styles.userInfo}>
          <View style={styles.avatar}>
            <View style={styles.avatarInner} />
          </View>
          <View>
            <Text style={styles.welcomeText}>Bienvenido!</Text>
            <Text style={styles.userName}>{userName}</Text>
          </View>
        </View>
        <View style={styles.iconButtons}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.iconText}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.iconText}>📞</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // Header para otras vistas
  return (
    <View style={styles.headerOther}>
      <Text style={styles.titleText}>{title}</Text>
      <TouchableOpacity 
        style={styles.closeButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.closeIcon}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // Header Home
  headerHome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#4338CA',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarInner: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 12,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 13,
    opacity: 0.9,
  },
  userName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  iconButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 20,
  },
  
  // Header Other Views
  headerOther: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#4338CA',
  },
  titleText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  closeButton: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});