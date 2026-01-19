import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile: React.FC = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <LinearGradient
        colors={['#14B8A6', '#0F766E']}
        style={styles.header}
      >
        <View style={styles.avatarWrapper}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/200' }}
            style={styles.avatar}
          />
        </View>

        <Text style={styles.name}>Habiba Shahidi</Text>
        <Text style={styles.role}>Senior React Native Developer</Text>
      </LinearGradient>

      {/* Stats */}
      <View style={styles.statsCard}>
        <StatItem label="Leads" value="128" />
        <StatDivider />
        <StatItem label="Deals" value="46" />
        <StatDivider />
        <StatItem label="Revenue" value="₹2.4M" />
      </View>

      {/* Info Card */}
      <View style={styles.infoCard}>
        <InfoRow icon="mail-outline" label="Email" value="habiba@email.com" />
        <InfoRow icon="business-outline" label="Company" value="Swift CRM" />
        <InfoRow icon="location-outline" label="Location" value="UAE" />
      </View>

      {/* Actions */}
      <View style={styles.actions}>
        <ActionItem icon="person-outline" label="Edit Profile" />
        <ActionItem icon="settings-outline" label="Settings" />
        <ActionItem icon="shield-checkmark-outline" label="Security" />
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutBtn}>
        <Icon name="log-out-outline" size={18} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;

/* =======================
   Components
======================= */

interface InfoRowProps {
  icon: string;
  label: string;
  value: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ icon, label, value }) => (
  <View style={styles.infoRow}>
    <Icon name={icon} size={18} color="#14B8A6" />
    <View style={{ marginLeft: 12 }}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  </View>
);

interface StatItemProps {
  label: string;
  value: string;
}

const StatItem: React.FC<StatItemProps> = ({ label, value }) => (
  <View style={styles.statItem}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const StatDivider = () => <View style={styles.statDivider} />;

interface ActionItemProps {
  icon: string;
  label: string;
}

const ActionItem: React.FC<ActionItemProps> = ({ icon, label }) => (
  <TouchableOpacity style={styles.actionItem}>
    <View style={styles.actionLeft}>
      <Icon name={icon} size={20} color="#E5E7EB" />
      <Text style={styles.actionLabel}>{label}</Text>
    </View>
    <Icon name="chevron-forward" size={18} color="#94A3B8" />
  </TouchableOpacity>
);

/* =======================
   Styles
======================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
  },

  header: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  avatarWrapper: {
    backgroundColor: '#fff',
    padding: 4,
    borderRadius: 60,
    marginBottom: 12,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },

  name: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '800',
  },

  role: {
    color: '#D1FAE5',
    fontSize: 14,
    marginTop: 4,
  },

  statsCard: {
    marginTop: -25,
    marginHorizontal: 20,
    backgroundColor: '#020617',
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 18,
    elevation: 6,
  },

  statItem: {
    alignItems: 'center',
  },

  statValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },

  statLabel: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 4,
  },

  statDivider: {
    width: 1,
    backgroundColor: '#1E293B',
  },

  infoCard: {
    marginTop: 25,
    marginHorizontal: 20,
    backgroundColor: '#020617',
    borderRadius: 16,
    padding: 16,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  infoLabel: {
    color: '#94A3B8',
    fontSize: 12,
  },

  infoValue: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 2,
  },

  actions: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#020617',
    borderRadius: 16,
  },

  actionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1E293B',
  },

  actionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  actionLabel: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 12,
    fontWeight: '600',
  },

  logoutBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 40,
    marginHorizontal: 40,
    backgroundColor: '#DC2626',
    paddingVertical: 14,
    borderRadius: 14,
  },

  logoutText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 8,
  },
});

