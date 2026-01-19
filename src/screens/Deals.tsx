import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

type DealStage = 'Prospect' | 'Negotiation' | 'Closed';

interface Deal {
  id: string;
  client: string;
  property: string;
  value: string;
  stage: DealStage;
  agent: string;
  closeDate: string;
}

const DEALS: Deal[] = [
  { id: '1', client: 'Ahmed Ali', property: 'Dubai Marina Apartment', value: 'AED 1.5M', stage: 'Prospect', agent: 'Ali Raza', closeDate: '2026-02-10' },
  { id: '2', client: 'Sara Khan', property: 'Business Bay Office', value: 'AED 950K', stage: 'Negotiation', agent: 'Habiba Shahidi', closeDate: '2026-02-20' },
  { id: '3', client: 'Omar Farooq', property: 'JVC Villa', value: 'AED 2.1M', stage: 'Closed', agent: 'Fatima Noor', closeDate: '2026-01-15' },
  { id: '4', client: 'Leena George', property: 'Palm Jumeirah Apartment', value: 'AED 3M', stage: 'Prospect', agent: 'Ali Raza', closeDate: '2026-03-01' },
    { id: '5', client: 'Charlie', property: 'Studio Apartment', value: 'AED 2M', stage: 'Prospect', agent: 'Ali Raza', closeDate: '2026-03-05' },
     { id: '6', client: 'Sana Bukhari', property: 'Reem Island', value: 'AED 5M', stage: 'Prospect', agent: 'Mahmood', closeDate: '2026-04-06' },
];

// Modern, soft colors for stages
const STAGE_COLORS: Record<DealStage, string[]> = {
  Prospect: ['#D1FAE5', '#10B981'], // soft green gradient
  Negotiation: ['#DBEAFE', '#3B82F6'], // soft blue gradient
  Closed: ['#FDE8E8', '#EF4444'], // soft red gradient
};

const { width } = Dimensions.get('window');

const Deals: React.FC = () => {
  return (
    <LinearGradient colors={['#111827', '#1F2937']} style={styles.container}>
      <Text style={styles.title}>Deals Overview</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 20 }}>
        {(Object.keys(STAGE_COLORS) as DealStage[]).map(stage => (
          <View key={stage} style={styles.column}>
            <Text style={[styles.columnTitle, { color: STAGE_COLORS[stage][1] }]}>{stage}</Text>

            {DEALS.filter(deal => deal.stage === stage).map(deal => (
              <LinearGradient key={deal.id} colors={STAGE_COLORS[stage]} style={styles.card}>
                {/* Client */}
                <View style={styles.clientRow}>
                  <View style={styles.avatarCircle}>
                    <Text style={styles.avatarText}>{deal.client[0]}</Text>
                  </View>
                  <Text style={styles.clientName}>{deal.client}</Text>
                </View>

                {/* Property */}
                <View style={styles.propertyRow}>
                  <Icon name="home-outline" size={16} color="#374151" />
                  <Text style={styles.propertyName}>{deal.property}</Text>
                </View>

                {/* Agent & Close Date */}
                <View style={styles.detailsRow}>
                  <Text style={styles.agent}>Agent: {deal.agent}</Text>
                  <Text style={styles.closeDate}>{deal.closeDate}</Text>
                </View>

                {/* Deal Value */}
                <Text style={styles.value}>{deal.value}</Text>
              </LinearGradient>
            ))}
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

export default Deals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#F3F4F6',
    marginBottom: 20,
  },

  column: {
    width: width * 0.7,
    marginRight: 16,
  },

  columnTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },

  card: {
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    minHeight: 130,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 4,
  },

  clientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },

  avatarCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  avatarText: {
    color: '#111827',
    fontWeight: '700',
    fontSize: 16,
  },

  clientName: {
    color: '#111827',
    fontWeight: '700',
    fontSize: 15,
  },

  propertyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },

  propertyName: {
    color: '#4B5563',
    fontSize: 13,
    marginLeft: 6,
  },

  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  agent: {
    color: '#6B7280',
    fontSize: 12,
  },

  closeDate: {
    color: '#6B7280',
    fontSize: 12,
  },

  value: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'right',
    color: '#111827',
  },
});


