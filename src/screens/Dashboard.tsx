import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  GestureResponderEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../assets/colors';

// Stats type
interface Stat {
  title: string;
  value: string;
  icon: string;
}

const stats: Stat[] = [
  { title: 'Leads', value: '124', icon: '👥' },
  { title: 'Deals', value: '38', icon: '📈' },
  { title: 'Revenue', value: 'AED 82K', icon: '💰' },
  { title: 'Tasks', value: '16', icon: '✅' },
];

// Props type for ActionButton
interface ActionButtonProps {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, onPress }) => (
  <TouchableOpacity style={styles.actionBtn} onPress={onPress}>
    <Text style={styles.actionText}>{label}</Text>
  </TouchableOpacity>
);

const Dashboard: React.FC = () => {
  return (
    <LinearGradient colors={['#0F172A', '#1E293B']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.welcome}>Good Morning 👋</Text>
            <Text style={styles.company}>SwiftCRM</Text>
          </View>

          <Image
            source={{ uri: 'https://i.pravatar.cc/100' }}
            style={styles.avatar}
          />
        </View>

        {/* Stats Cards */}
        <View style={styles.statsGrid}>
          {stats.map((item, index) => (
            <View key={index} style={styles.statCard}>
              <Text style={styles.statIcon}>{item.icon}</Text>
              <Text style={styles.statValue}>{item.value}</Text>
              <Text style={styles.statTitle}>{item.title}</Text>
            </View>
          ))}
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsRow}>
          <ActionButton label="Add Lead" />
          <ActionButton label="Create Deal" />
          <ActionButton label="Add Task" />
        </View>

        {/* Recent Leads */}
        <Text style={styles.sectionTitle}>Recent Leads</Text>
        {[1, 2, 3].map((_, index) => (
          <View key={index} style={styles.leadCard}>
            <View>
              <Text style={styles.leadName}>Ahmed Al Zahra</Text>
              <Text style={styles.leadSub}>Property Inquiry • Dubai</Text>
            </View>
            <Text style={styles.leadStatus}>New</Text>
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },

  welcome: {
    color: '#CBD5E1',
    fontSize: 14,
  },

  company: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '800',
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22,
  },

  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  statCard: {
    width: '48%',
    backgroundColor: '#1E293B',
    borderRadius: 18,
    padding: 20,
    marginBottom: 15,
  },

  statIcon: {
    fontSize: 22,
    marginBottom: 10,
  },

  statValue: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
  },

  statTitle: {
    fontSize: 14,
    color: '#94A3B8',
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginVertical: 20,
  },

  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  actionBtn: {
    backgroundColor: '#14B8A6',
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 14,
  },

  actionText: {
    color: '#fff',
    fontWeight: '700',
  },

  leadCard: {
    backgroundColor: '#1E293B',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  leadName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  leadSub: {
    color: '#94A3B8',
    fontSize: 13,
    marginTop: 4,
  },

  leadStatus: {
    color: '#22C55E',
    fontWeight: '700',
  },
});

