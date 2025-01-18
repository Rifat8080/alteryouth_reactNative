import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const ScholarshipsScreen = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState(6);

  useEffect(() => {
    try {
      const data = require('../assets/data/leaderboard.json');
      setLeaderboard(data);
    } catch (error) {
      console.error('Error loading leaderboard data:', error);
    }
  }, []);

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const showMoreCards = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 6);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>#alteryouthrevolution</Text>
          <Text style={styles.subtitle}>The Scholarship Community</Text>
          <Text style={styles.description}>
            Despite public primary schools being free of cost in Bangladesh,
            many students still <Text style={styles.bold}>drop out of school</Text> to work and earn in order to support their families.
            Your scholarship helps a child attend school and support their families at the same time.
          </Text>
        </View>
        <View style={styles.cardsContainer}>
          {leaderboard.slice(0, visibleCards).map((item, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.cardHeader}>
                <View>
                  <View style={styles.cardTitleContainer}>
                    <Text style={styles.cardTitle}>@{item.invite_code}</Text>
                    <Image
                      source={{ uri: `https://flagicons.lipis.dev/flags/4x3/${item.country_code.toLowerCase()}.svg` }}
                      style={styles.flag}
                    />
                  </View>
                  <Text style={styles.scholarshipCount}>{item.count} Scholarship{item.count > 1 ? 's' : ''}</Text>
                </View>
                <Text style={styles.joinedDate}>Joined {new Date(item.started_at).toLocaleDateString()}</Text>
              </View>
              <View style={styles.cardContent}>
                {item.student_imgs.slice(0, expandedCard === index ? item.student_imgs.length : 1).map((img, imgIndex) => (
                  <View key={imgIndex} style={styles.studentContainer}>
                    <Image source={{ uri: img }} style={styles.studentImage} />
                    <View style={styles.studentInfo}>
                      <Text style={styles.studentName}>Student {imgIndex + 1}</Text>
                      <Text style={styles.schoolName}>School Name</Text>
                    </View>
                  </View>
                ))}
                {item.student_imgs.length > 1 && (
                  <TouchableOpacity onPress={() => toggleExpand(index)}>
                    <Text style={styles.toggleButton}>{expandedCard === index ? 'See Less' : 'See More'}</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}
        </View>
        {visibleCards < leaderboard.length && (
          <View style={styles.footer}>
            <TouchableOpacity onPress={showMoreCards} style={styles.seeMoreButton}>
              <Text style={styles.seeMoreButtonText}>See More</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
          <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Join Community</Text>
            </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#37C467',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  cardsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
    width: '100%',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 5,
  },
  flag: {
    width: 16,
    height: 12,
  },
  scholarshipCount: {
    backgroundColor: '#37C467',
    color: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
  },
  joinedDate: {
    fontSize: 12,
    color: 'black',
  },
  cardContent: {
    marginTop: 10,
  },
  studentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  studentImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  studentInfo: {
    flex: 1,
  },
  studentName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  schoolName: {
    fontSize: 12,
    color: 'black',
  },
  toggleButton: {
    color: '#37C467',
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 10,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
  seeMoreButton: {
    padding: 10,
    borderRadius: 10,
    borderColor: '#37C467',
    borderWidth: 1,
    marginBottom: 10,
  },
  seeMoreButtonText: {
    color: '#37C467',
    fontWeight: 'bold',
  },
  joinButton: {
    
    padding: 20,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#37C467',
    margin: 20,
  },
  joinButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ScholarshipsScreen;